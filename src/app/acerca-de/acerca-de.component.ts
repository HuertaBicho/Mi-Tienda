import { Component } from '@angular/core';


@Component({
  selector: 'app-acerca-de',
  standalone: true,
  imports: [],
  template: `
    <div class="about-container">
      <h2 class="brand-title">Sobre GAP</h2>
      <div class="content-wrapper">
        <p class="brand-description">
          GAP es tu destino ideal para encontrar lo último en moda, bisutería y accesorios. Fundada en 2015 en Barcelona, España, nuestra marca nació inspirada en la vibrante esencia mediterránea: la fusión de la elegancia clásica europea con el estilo fresco y desenfadado del streetwear urbano.
        </p>
        
        <div class="highlight-box">
          <p>
            En GAP, creemos que la moda debe ser accesible, versátil y, sobre todo, una forma de expresión personal.
          </p>
        </div>
        
        <p class="brand-offer">
          Ofrecemos prendas de calidad, diseños exclusivos y complementos cuidadosamente seleccionados para que cada pieza cuente una historia. Ya sea para un outfit casual, elegante o lleno de personalidad, aquí encontrarás todo lo que necesitas para destacar con confianza.
        </p>
        
        <blockquote class="brand-quote">
          "Moda con alma, estilo sin límites" — porque en GAP, tu look es tan único como tú.
        </blockquote>
        
        <p class="brand-cta">
          ¡Ven y descubre el arte de vestir con GAP!
        </p>
      </div>
    </div>
  `,
  styles: `
    .about-container {
      max-width: 900px;
      margin: 2rem auto;
      padding: 2rem;
      font-family: 'Montserrat', sans-serif;
      color: #333;
      line-height: 1.8;
    }

    .brand-title {
      text-align: center;
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 2rem;
      position: relative;
      font-weight: 600;
    }

    .brand-title::after {
      content: '';
      display: block;
      width: 80px;
      height: 3px;
      background:rgb(35, 37, 75);
      margin: 0.5rem auto;
    }

    .content-wrapper {
      background: #f9f9f9;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }

    .brand-description, .brand-offer {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }

    .highlight-box {
      background: #fff;
      border-left: 4px solid rgb(35, 37, 75);
      padding: 1.5rem;
      margin: 2rem 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .highlight-box p {
      margin: 0;
      font-style: italic;
      color: #2c3e50;
    }

    .brand-quote {
      font-size: 1.3rem;
      color:rgb(35, 37, 75);
      text-align: center;
      font-weight: 600;
      margin: 2.5rem 0;
      padding: 1.5rem;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }

    .brand-cta {
      text-align: center;
      font-weight: bold;
      font-size: 1.2rem;
      color: #2c3e50;
      margin-top: 2rem;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .about-container {
        padding: 1rem;
      }
      
      .brand-title {
        font-size: 2rem;
      }
      
      .content-wrapper {
        padding: 1.5rem;
      }
    }
  `
})
export class AcercaDeComponent {}
