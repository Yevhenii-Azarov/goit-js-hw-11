export function searchImg(value) {
    const baseUrl = 'https://pixabay.com';
    const endPoint = '/api/'
    const options = new URLSearchParams({
        key: '44710558-f9f1e7058b6d6169ae4ab4229',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        q:`${value}`,
    });
    const url = `${baseUrl}${endPoint}?${options}`;
    return fetch(url).then(data => {
        if (!data.ok) {
        throw new Error(data.status);
        } else {
            return data.json();
    }
        
     })
};
