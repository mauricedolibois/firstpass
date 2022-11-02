package database.models;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;
import encryption.symmetric.models.CipherData;

/**
 * This class represents an encrypted attribute of an entry.
 */
@DatabaseTable(tableName = "encrypted")
public class EncryptedModel {

    @DatabaseField(generatedId = true)
    private Integer id;
    @DatabaseField()
    private String cipher;
    @DatabaseField()
    private String iv;

    public EncryptedModel() {}

    public EncryptedModel(String cipher, String iv) {
        this.cipher = cipher;
        this.iv = iv;
    }

    public CipherData getCipherData() {
        CipherData data = new CipherData();
        data.text = cipher;
        data.iv = iv;
        return data;
    }

}
