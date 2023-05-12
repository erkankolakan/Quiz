import he from 'he';


const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5) //listedeki elemanların sırasını karıştırır.
}


export const fetchQuizData = async(difficulty , amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(url)).json();
    return data.results.map((dt) => ({
        ...dt,
        answer: shuffleArray([...dt.incorrect_answers , dt.correct_answer])
    }))
}


//Fonksiyonun başına export yazdık çünkü başka dosyalarda bu fonksiyona erişebilsin.
//Bir API ile bir HTTP(Veri Alışverişi) isteği yaparken, işlemin tamamlanması birkaç milisaniye veya birkaç saniye sürebilir. Bu nedenle, await anahtar kelimesi ile isteğin sonucunu bekleyebiliriz. Bu sayede, işlem tamamlanmadan önce bir sonraki adıma geçilmesi engellenir ve isteğin tamamlanması beklenir. "async /await"
//fetch() fonksiyonu ile url değişkenindeki URL adresine HTTP isteği gönderilir.

