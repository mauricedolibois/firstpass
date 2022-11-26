package io.firstpass.database.models;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

/**
 * This class is used to represent a category in the io.firstpass.database.
 */
@DatabaseTable(tableName = "categories")
public class CategoryModel {
    @DatabaseField(id = true)
    private Integer id;

    @DatabaseField()
    private String category;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public CategoryModel(Integer id, String category) {
        this.id = id;
        this.category = category;
    }

    public CategoryModel() {}
}