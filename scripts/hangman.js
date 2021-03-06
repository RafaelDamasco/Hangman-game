class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    
        if (this.remainingGuesses === 0) {
            this.status = 'Failed'
        } else if (finished) {
            this.status = 'Finished'
        } else {
            this.status = 'Playing'
        }
        this.statusMessage
    }
    get statusMessage() {
        if (this.status === 'Playing') {
            return `Guess left ${this.remainingGuesses}`
        } else if (this.status === 'Failed') {
            return `Nice try! The word has "${this.word.join('')}".`
        } else {
            return `Great work! you! you guessed the word`
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle    
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        
        if(this.status !== 'Playing') {
            return   
        }
                
        if(isUnique) { //SE CARACTER NAO EXISTIR NA LISTA DE LETRAS
            this.guessedLetters.push(guess)
        }
        if(isUnique && isBadGuess) {
            this.remainingGuesses -= 1
        }
                
        this.calculateStatus()    
    }
}


