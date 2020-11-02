
function fibonacci(number) {
    // TODO: Add a comment describing the purpose of this conditional statement.
    if(number > 2) {
        return number
    }

    // TODO: Add a comment describing the purpose of this return statement.
    return fibonacci(number - 1) + fibonacci(number - 2)
}