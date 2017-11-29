// const isDev = process.env.NODE_ENV === 'development';

const setting = {
    appname: 'node-express-boilerplate',
    port: 3000,
    mongo : {
        host:"localhost",
        port: 27017,
        dbname: "node_express_boilerplate"
    }
};

module.exports = setting;