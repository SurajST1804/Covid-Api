window.SpeechRecognition=window.webkitSpeechRecognition

let recognition=new SpeechRecognition()

let p=document.createElement('p')
let template=document.getElementById('template')
template.appendChild(p)
var value=1

recognition.addEventListener("result",e=>{
    console.log(e);
    let text=e.results[0][0].transcript;
    p.innerHTML=text
    if(e.results[0].isFinal===true){
         p=document.createElement('p')
        template.appendChild(p)

        // var newdata=(text.value=text)

        // if(localStorage.getItem('data1')==null){
        //     localStorage.setItem('data1','[]');
        // }

        // var olddata=JSON.parse(localStorage.getItem('data1'))
        // olddata.push(newdata)

        // localStorage.setItem('data1',JSON.stringify(olddata))

        // let finalWord=(text.value=text)

        // window.localStorage.setItem(text,finalWord)

        // window.localStorage.setItem(`key:${value}`,text);
        // value++;
       
            // window.localStorage.setItem('data',text);

        

        // window.localStorage.setItem('suraj',text)

    }
    window.localStorage.setItem(`key:${value}`,text);
        value++;
})
recognition.addEventListener('end',recognition.start)


recognition.start();