const db = require("../utils/database")
module.exports = class Note {
    constructor( title , info , userId,id){
        this.id = id;
        this.title = title;
        this.info = info;
        this.userId = userId;
    }

    static async findAll(columns = '*') {
        let result = await db.execute(`SELECT${columns} FROM notes`);
        return result[0];
    }

    static async findById(id , columns = '*') {
        let result = await db.execute(`SELECT${columns} FROM notes WHERE id = ${id}`);
        if(result[0].length > 0){
            let object = result[0][0];
            return new Note(object.title, object.info,object.user_id,object.id);
        }else{
            return null;
        }
    }

    async save() {
        try {
            let result = await db.execute(
                'INSERT INTO notes (title , info , userId) VALUES (?, ?, ?)'
                ,[this.title , this.info , this.userId]
            );
            this.id = result[0].insertId;
            return true;
        } catch (error) {
            return false;
        }
    }

    async update() {
        try {
            let result = await db.execute(
                "UPDATE notes SET title = ?, info = ?, user_id = ? WHERE id = ?",
                [this.title,this.info,this.userId]
            );
            return result[0].affectedRows > 0 ;
        } catch (error) {
            return false;
        }
    }

    async delete() {
        let result = await db.execute('DELETE FROM notes WHERE id = ?',[this.id]);
        return result[0].affectedRows > 0;
    }
    //belongsTo - User 1=>1
    async notes() {
        let result = await db.execute('SELECT u.id, u.name, u.email, FROM users u JOIN notes n ON u.id = n.user_id WHERE n.id = ? ',[this.id]);
        return result[0][0];
    }
};