import axios from 'axios'

export async function stripPaymentIntent(amount: number): Promise<string> {
    try {
        const url = 'https://stripepaymentintent-7q6uiobicq-uc.a.run.app'
        const headers = { 'Content-Type': 'application/json' }
        const body = { amount: amount.toFixed(2) }
        const response = await axios.post(url, body, { headers })
        return response.data.clientSecret
    } catch (error: any) {
        console.log('stripPaymentIntent error: ', error)
        const errorMessage = error?.response?.data?.error || error.message
        throw new Error(errorMessage)
    }
}
