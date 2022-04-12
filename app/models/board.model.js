module.exports = mongoose => mongoose.model('board',
        mongoose.Schema(
            {name: String,
            passengerId: String,
            teamId: String,
            subject: String
            }, { timestamps: true}
        )
    )
