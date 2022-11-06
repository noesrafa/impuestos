import {gql} from '@apollo/client';
export const ObtenerAnalisis = gql`
  {
    obtenerAnalisis {
      id
      mes
      year
      ingresosTotales
      gastosTotales
      isr
      iva
      isrRetenido
      ivaRetenido
    }
  }
`;
