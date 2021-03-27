module.exports = (conn, sequelize) => {
    const Info = conn.define(
        "info",
        {
            id: {
                type: sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

            date: {
                type: sequelize.DATE,
                allowNull: false,
            },
            subscribers: {
                type: sequelize.BIGINT,
                allowNull: false,
            },
            active_subscribers: {
                type: sequelize.BIGINT,
                allowNull: false,
            },
            submission: {
                type: sequelize.BIGINT,
                allowNull: true,
            },
            comments: {
                type: sequelize.BIGINT,
                allowNull: true,
            },
        },
        {
            timestamps: false,
        }
    );

    return Info;
};
