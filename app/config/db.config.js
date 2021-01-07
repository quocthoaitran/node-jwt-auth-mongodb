module.exports = {
  URL: `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.aep8s.mongodb.net/no${process.env.DB_NAME}?retryWrites=true&w=majority`
}