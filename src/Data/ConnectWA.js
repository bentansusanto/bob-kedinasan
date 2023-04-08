import { useState } from "react"

const message = "Halo, saya mau nanya soal paket les di Bimbel Excelent"
const phoneNumber = "+628812518233"

export const handleWhatsappMessage = () => {
        window.open('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message))
}
