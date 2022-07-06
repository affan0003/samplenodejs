function create(req) {
    try {
        return "hello world!"
    } catch (error) {
        return error
    }
}

module.exports={
    create
}