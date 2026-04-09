const prompt = require ("prompt-sync")();

console.log("=== CHAT AI SEDERHANA ===")
console.log("Ketik 'exit' untuk keluar\n")

let namaAI = "AI"

while (true) {
    const input = prompt("Kamu: ").toLocaleLowerCase();

    if (input === "exit") {
        console.log("AI: Sampai jumpa!")
        break
    }

    // rule-base responses
    if (input.includes("halo") || input.includes("hai")) {
        console.log(namaAI, ": Halo juga!");
    } else if (input.includes("siapa") && input.includes("kamu")) {
        console.log(namaAI, ": Saya Ai sederhana.");
    } else if (input.includes("namamu" || input.includes("nama kamu"))) {
        console.log(namaAI, ": Saya tidak punya nama, kamu bisa kasih saya nama: ")
        namaAI=prompt("Masukan nama AI mu!: ");
    } else if (input.includes("umur")) {
        console.log(namaAI, ": Saya tidak punya umur, saya program.")
    } else if (input.includes("terimakasih" || input.includes("terima kasih"))) {
        console.log(namaAI, ": Sama-sama!")
    } else if (input.includes("apa kabar")) {
        console.log(namaAI, ": Saya baik, terimakasih!")
    } else {
        console.log(namaAI, ": Saya belum mengerti maksud kamu.")
    }
}