
export const sendForm = async (e) => {
    fetch('https://formsubmit.co/mlssaitov@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    })
}



