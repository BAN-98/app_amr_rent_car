import { Component } from "react";

export default class Hero extends Component {
    render() {
        return (
            <section className="w-full h-auto mt-40 flex items-center justify-center">
                <div className="w-11/12 font-Onest mx-auto">
                    <h4 className="text-white text-5xl font-medium mb-10">Powerful, Fun and</h4>
                    <h1 className="text-white text-6xl uppercase mb-10">Fierce to <br /> <span className="text-red-600/85 text-7xl font-bold">Drive</span></h1>
                    <p className="text-white mb-20">Real Poise, Real Power, Real Performance.</p>
                    <a href="#" className="text-white rounded-3xl bg-red-600 p-4 hover:bg-transparent uppercase border-red-600 border-2">Mira nuestras Ofertas</a>
                </div>
            </section>
        )
    }
}