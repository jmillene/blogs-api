const postCategoryShema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "BlogPosts",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      tableName: "posts_categories",
      timestamps: false,
      underscored: true,
    }
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: "postId",
      otherKey: "categoryId",
      as: "categories",
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: "categoryId",
      otherKey: "postId",
      as: "BlogPosts",
    });
  };
  return PostCategory;
};

module.exports = postCategoryShema;
