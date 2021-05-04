module.exports = mongoose => {
    var schema = mongoose.Schema({
        username: { type: String, required: true, unique: true },
        correo: { type: String, required: true, unique: true },
        contrasena: { type: String, required: true },
        nombres: { type: String, required: true },
        apellidos: { type: String, required: true },
        dpi: { type: Number, required: true, unique: true },
        edad: { type: Number, required: true },
        tarjetas: [],
        transacciones: [],
        tarjetasCredito: []
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Usuario = mongoose.model("usuario", schema);
    return Usuario;
};