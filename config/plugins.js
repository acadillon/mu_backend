module.exports = ({ env }) => ({
    upload: {
        config: {
            providerOptions: {
                sizeLimit: 400000, // Limite de 400Ko
            },
        },
    },
});
