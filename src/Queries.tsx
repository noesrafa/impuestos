import {gql} from '@apollo/client';
export const ObtenerAnalisis = gql`
  {
    obtenerAnalisis {
      id
      mes
      ingresosTotales
      gastosTotales
      isr
      iva
      isrRetenido
      ivaRetenido
    }
  }
`;
