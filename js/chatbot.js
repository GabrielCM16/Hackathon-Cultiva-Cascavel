//variaveis do html
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

//variaves a serem atualizadas
let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

//CRIANDO CHAT
const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

//
const generateResponse = (chatElement,id) => {

    let message = chatElement.querySelector("p");
    let resposta ='O Cultiva Cascavel é um Sistema Web desenvolvido para melhorar a comunicação entre produtores, clientes e instituições responsáveis pela coordenação da Agricultura Familiar ';
    let lista = ["O que é o Cultivo Cascavel","O que você pode fazer com o Cultivo Cascavel?","Porque o sitema Web foi elaborado?"]

    //Simple logic to determine the bot's response based on user input
    if (lista[id-1] =='O que é o Cultivo Cascavel') {
        let resposta ='O Cultiva Cascavel é um Sistema Web desenvolvido para melhorar a comunicação entre produtores, clientes e instituições responsáveis pela coordenação da Agricultura Familiar ';
        id+=1

        message.textContent = resposta;

    } else if (lista[id-1] == 'O que você pode fazer com o Cultivo Cascavel?') {
        let resposta2 ='Por meio do sistema Web, você pode visualizar as Unidades de Produção e seus pontos de venda. Produtores também conseguem cadastrar seus dados relacionados ao plantio e produtos vendidos que podem ser acessados por instituições responsáveis pela coordenação da Agricultura Familiar';
        id+=1
        message.textContent = resposta2;

    } else  if (lista[id] =='Porque o sitema Web foi elaborado?') {
        let resposta3= 'Atualmente, a comunição entre esses três tipos é feita de forma informal e sem nenhuma verificação ou facilidade no acesso aos dados. Com isso o sistema visa a disseminação de informações sobre os agricultores e garantia de processos realizados pelas instituições, seja a doação de produtos ou fácil acesso aos dados do produtor. ';
        id+=1
        message.textContent = resposta3;
    }
}



chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});
let index = 0;


chatInput.addEventListener("keydown", (e) => {
    //If Enter key is pressed without Shift key and the window
    // width is greater than 800px, handle the chat
    if(e.key === "Tab" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        //handleChat();
        let perguntas =  ["O que é o Cultivo Cascavel","O que você pode fazer com o Cultivo Cascavel?","Porque o sitema Web foi elaborado?"];


        const messageElement =  document.getElementById('he').value=perguntas[index];
        index+=1;

        if (index > 2){ let = index =0}
        sendChatBtn.addEventListener("click", () => {

            // Clear the input textarea and set its height to default
            chatInput.value = "";
            chatInput.style.height = `${inputInitHeight}px`;
            // Append the user's message to the chatbox
            chatbox.appendChild(createChatLi(messageElement, "outgoing"));
            chatbox.scrollTo(0, chatbox.scrollHeight);

            setTimeout(() => {
                // Display "Thinking..." message while waiting for the response
                const incomingChatLi = createChatLi("Thinking...", "incoming");
                chatbox.appendChild(incomingChatLi);
                chatbox.scrollTo(0, chatbox.scrollHeight);
                let id = 1

                let lista = ["O que é o Cultivo Cascavel","O que você pode fazer com o Cultivo Cascavel?","Porque o sitema Web foi elaborado?"];

                generateResponse(incomingChatLi,id)

                if (id>3){let id = 1;}



            }, 600);


        });

    }
});

closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));