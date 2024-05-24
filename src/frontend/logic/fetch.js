export async function fetchEventos() {
    const option = { method: "GET", headers: { 'Content-Type': 'aplication/json' } }
    const res = await fetch("/api/event/events", option)
    const resultado = res.status === 200 ? res.json() : []
    return resultado
}
export async function fetchEventosById(id) {
    const option1 = { method: "GET", headers: { 'Content-Type': 'aplication/json' } }
    const res1 = await fetch(`/api/event/${id}`, option1)
    // const resultado = res.status === 200 ? res.json() : []
    if(res1.status === 200) {
        const body = await res1.json()
        const [evento] = body
        return evento
    }
    // return resultado
}