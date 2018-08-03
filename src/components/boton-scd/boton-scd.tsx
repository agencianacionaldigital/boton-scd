import { Component, Prop } from '@stencil/core';

@Component({
    tag: "boton-scd",
    styleUrl: "boton-scd.css",
    shadow: true
})

export class WebShare {

    @Prop() title: string;
    @Prop() text: string;
    @Prop() url: string;


    // Ciclo de vida, el componente se ha cargado pero aún no se ha renderizado.
    // Sólo se llamará una vez.
    // Es buen sitio para hacer actualizaciones de último momento antes de que se renderice.
    componentWillLoad() {
        //this.showModal(this.isOpen);
    }

    componentDidLoad() {
    }

    share() {
        // have to cast to any
        // as built in ts types do
        // not have share on navigator yet
        if ((navigator as any).share) {
            (navigator as any).share({
                title: this.title,
                text: this.text,
                url: this.url,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            // fallback to sharing to twitter
            //window.open(`http://twitter.com/share?text=${this.text}&url=${this.url}`)
            var URLactual = window.location;
            window.open(URLactual + "", "Diseño Web", "width=500, height=500");
        }
    }

    render() {
        return (
            <div class="text-center">
                <a class="style-button" onClick={() => this.share()}>
                    Login
                </a>
            </div>
        );
    }
}