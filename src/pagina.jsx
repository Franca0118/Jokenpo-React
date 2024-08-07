import { React, useState } from "react"
import "./css.css"


let p1_pontos = 0
let p2_pontos = 0

let p_pontos = 0
let maquina_pontos = 0
let jogoMaquina = async () => {

    let jogadorSelect = null
    while (jogadorSelect == null || jogadorSelect == '') {
        const { value } = await Swal.fire({
            title: "Selecione o que vai jogar",
            input: "select",
            inputOptions: {
                Opcoes: {
                    pedra: "pedra",
                    papel: "papel",
                    tesoura: "tesoura",
                }
            },
            inputPlaceholder: "Selecione",
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    jogadorSelect = value
                    resolve()
                });
            }
        });
    }
    document.querySelector("#jogomaquinap1").src = `${jogadorSelect}.png`
    let maquina = document.querySelector("#jogomaquinap2")

    let num = 1
    let maquinaran = 0
    let animacao = () => {



        switch (num) {
            case 1:
                maquina.src = 'pedra.png'
                break

            case 2:
                maquina.src = 'papel.png'
                break

            case 3:
                maquina.src = 'tesoura.png'
                break
        }
        num++
        num = num > 3 ? 0 : num
    }


    let animcaofunc = setInterval(animacao, 30)
    setTimeout(() => {
        clearInterval(animcaofunc)
        maquinaran = Math.floor(Math.random() * 3) + 1

        switch (maquinaran) {
            case 1:
                maquinaran = 'pedra'
                maquina.src = 'pedra.png'
                break

            case 2:
                maquinaran = 'papel'
                maquina.src = 'papel.png'
                break

            case 3:
                maquinaran = 'tesoura'
                maquina.src = 'tesoura.png'
                break
        }
        if (

            (jogadorSelect == 'pedra' && maquinaran == 'tesoura') ||
            (jogadorSelect == 'papel' && maquinaran == 'pedra') ||
            (jogadorSelect == 'tesoura' && maquinaran == 'papel')
        ) {
            document.querySelector("#jogocommaquinaresultada").innerHTML = "VENCEU"
            p_pontos++
        } else if (jogadorSelect == maquinaran) {
            document.querySelector("#jogocommaquinaresultada").innerHTML = "EMPATE"
        } else {
            document.querySelector("#jogocommaquinaresultada").innerHTML = "PERDEU"
            maquina_pontos++
        }
        document.querySelector("#p_pontostxt").innerHTML = `Pontos: ${p_pontos}`
        document.querySelector("#maquina_pontostxt").innerHTML = `Pontos: ${maquina_pontos}`
    }, 1200)







}



var JogoComMaquina = (
    (
        <div id="jogoMaquina">

            <span>
                <h1 id="p_pontostxt">Pontos: 0</h1>
                <h2>sua escolha</h2>
                <img id="jogomaquinap1" src="i.png" />
            </span>


            <span id="botoesPartida">
                <h1 id="jogocommaquinaresultada">?</h1>
                <section>
                    <button onClick={() => {
                        jogoMaquina()
                        document.querySelector("#jogocommaquinaresultada").innerHTML = "?"
                    }}>Jogar novamente</button>
                    <button onClick={() => { window.location.reload() }}>Voltar</button>
                </section>
            </span>

            <span>´
                <h1 id="maquina_pontostxt">Pontos: 0</h1>
                <h2>escolha da maquina</h2>
                <img id="jogomaquinap2" src="i.png"/>
            </span>
        </div>
    )
)


let jogocom1v1 = async () => {


    let p1 = null
    while (p1 == null || p1 == '') {
        const { value } = await Swal.fire({
            title: "P1: Selecione o que vai jogar, nao deixe o p2 ver sua escolha",
            input: "select",
            inputOptions: {
                Opcoes: {
                    pedra: "pedra",
                    papel: "papel",
                    tesoura: "tesoura",
                }
            },
            inputPlaceholder: "Selecione",
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    p1 = value
                    resolve()
                });
            }
        });
    }

    let p2 = null
    while (p2 == null || p2 == '') {
        const { value: fruit } = await Swal.fire({
            title: "P2: Selecione o que vai jogar",
            input: "select",
            inputOptions: {
                Opcoes: {
                    pedra: "pedra",
                    papel: "papel",
                    tesoura: "tesoura",
                }
            },
            inputPlaceholder: "Selecione",
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    p2 = value
                    resolve()
                });
            }
        });
    }


    document.querySelector("#jogop1p2_p1_img").src = `${p1}.png`
    document.querySelector("#jogop1p2_p2_img").src = `${p2}.png`
    console.log(p1)
    console.log(p2)
    if (

        (p1 == 'pedra' && p2 == 'tesoura') ||
        (p1 == 'papel' && p2 == 'pedra') ||
        (p1 == 'tesoura' && p2 == 'papel')
    ) {
        document.querySelector("#restp1p2").innerHTML = "P1 VENCEU / P2 PERDEU"
        p1_pontos++
    } else if (p1 == p2) {
        document.querySelector("#restp1p2").innerHTML = "EMPATE"
    } else {
        document.querySelector("#restp1p2").innerHTML = "P1 PERDEU / P2 VENCEU"
        p2_pontos++
    }

    document.querySelector("#p1pontostxt").innerHTML = `Pontos: ${p1_pontos}`
    document.querySelector("#p2pontostxt").innerHTML = `Pontos: ${p2_pontos}`
}





var JogoComJogador = (
    (
        <div id="jogoMaquina">

            <span>
                <h1 id="p1pontostxt">Pontos: 0</h1>
                <h2>jogador 1</h2>
                <img id="jogop1p2_p1_img" src="i.png" />
            </span>


            <span id="botoesPartida">
                <h1 id="restp1p2">?</h1>
                <section>
                    <button onClick={() => { jogocom1v1() }}>Jogar novamente</button>
                    <button onClick={() => { window.location.reload() }}>Voltar</button>
                </section>
            </span>

            <span>´
                <h1 id="p2pontostxt">Pontos: 0</h1>
                <h2>jogador 2</h2>
                <img id="jogop1p2_p2_img" src="i.png" />
            </span>
        </div>
    )
)

export default () => {
    let [Pagina, setPagina] = useState(
        (

            <div id="divBase">
                <h1>JOKENPÔ</h1>
                <button onClick={() => { setPagina((JogoComMaquina)); jogoMaquina() }}>JOGAR COM MAQUINA</button>
                <button onClick={() => { setPagina((JogoComJogador)); jogocom1v1() }}>JOGAR 1X1</button>
            </div>
        ))
    return (
        <>
            {Pagina}

        </>
    )
}