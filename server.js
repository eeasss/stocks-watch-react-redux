const express = require('express');
const fs = require('fs');
const SwaggerExpress = require('swagger-express-mw');

const app = express();
let config = {
    appRoot: process.cwd()
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
    console.log(arguments);
    app.set("port", process.env.PORT || 3001);

    // Express only serves static assets in production
    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    }

    swaggerExpress.register(app);

    app.listen(app.get("port"), () => {
        console.log(`Find the server at: http://localhost:${app.get("port")}/`);
    });
});
