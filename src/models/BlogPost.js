const blogPostSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    "BlogPost",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "blog_posts",
      timestamps: false,
      underscored: true,
    }
  );
  BlogPost.associate = (models) => {
BlogPost.belongsTo(models.User, {
  foreignKey: "userId",
  as: "user",
  });
}
  return BlogPost;
};
module.exports = blogPostSchema;
