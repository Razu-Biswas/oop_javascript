class Player {
    #name
    #birthDay
    #monthlySalary
    #noOfMonths
    constructor(name, birthDay, monthlySalary, noOfMonths) {
        this.#name = name;
        this.#birthDay = birthDay;
        this.#monthlySalary = monthlySalary;
        this.#noOfMonths = noOfMonths;

    }


    calculate_age() {
        const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }

    getSalary() {
        return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
    }
}



const Sakib = new Player("sakib", "1993-03-09", 200000, 12)
const Skb = new Player("skb", "1993-03-09", 200000, 12)

console.log(Sakib.calculate_age())

console.log(Skb)