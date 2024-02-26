import { Component } from "react";

export class About extends Component {
    render() {
        return (
            <div id="about" className="h-screen w-11/12  font-Onest">
                <h1 className="text-white text-5xl text-center my-4">Acerca de nosotros</h1>
                <div className="mb-4 bg-zinc-700/30 rounded-lg mx-auto p-8 backdrop-blur-lg">
                    <h1 className="text-white font-medium text-2xl">Acerca de American Rent Car:</h1>
                    <p className="text-pretty text-white text-xl py-3 mx-auto">
                        Bienvenido a American Rent Car, tu elección confiable para
                        experiencias de alquiler de autos excepcionales. En el corazón de
                        nuestro compromiso está la firme convicción de brindar a nuestros
                        clientes no solo vehículos de alta calidad, sino también un servicio
                        personalizado que supere sus expectativas.
                    </p>
                </div>
                <div className="mb-4 bg-zinc-700/30 rounded-lg mx-auto p-8 backdrop-blur-lg">
                    <h1 className="text-white font-medium text-2xl text-center">Nuestra Misión:</h1>
                    <p>
                        En American Rent Car, nos esforzamos por ofrecer la mejor experiencia
                        de alquiler de autos en la industria. Nuestra misión es proporcionar a
                        nuestros clientes vehículos confiables, seguros y confortables,
                        respaldados por un servicio excepcional que haga que cada viaje sea
                        inolvidable.
                    </p>
                </div>
                <h1>Compromiso con la Calidad:</h1>
                <p>
                    Sabemos que la calidad es esencial cuando se trata de alquiler de
                    autos. En American Rent Car, mantenemos una flota diversa y moderna,
                    compuesta por vehículos de las mejores marcas y modelos. Cada
                    automóvil se somete a rigurosas inspecciones para garantizar que esté
                    en perfectas condiciones antes de llegar a tus manos.
                </p>
                <h1>Atención al Cliente Excepcional:</h1>
                <p>
                    Nuestro compromiso con la excelencia se refleja en el trato que
                    brindamos a nuestros clientes. Desde el momento en que nos contactas
                    hasta la devolución del vehículo, nuestro equipo amable y profesional
                    está aquí para brindarte asistencia personalizada. Nos enorgullece la
                    atención al cliente de primer nivel y nos esforzamos por superar tus
                    expectativas en cada interacción.
                </p>
                <h1>Transparencia y Honestidad:</h1>
                <p>
                    En American Rent Car, valoramos la transparencia y la honestidad. No
                    hay sorpresas desagradables ni tarifas ocultas. Te proporcionamos
                    información clara y detallada sobre nuestras tarifas y términos para
                    que puedas tomar decisiones informadas y sentirte seguro al elegirnos
                    como tu compañía de alquiler de autos.
                </p>
            </div>
        );
    }
}
