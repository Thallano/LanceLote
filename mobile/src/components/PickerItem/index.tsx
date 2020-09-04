/*import { Picker } from '@react-native-community/picker';
import { useState } from 'react';

export interface Picker {
    valeu: string;
    label: string;
}

export interface PickerItemProps{
    valeu: string;
    label: string;
}

const PickerItem: React.FC<PickerItemProps> = () =>  {
    const [service, setService] = useState('');
return (
    <>
        <Picker
                selectedValue={service}
                onValueChange={(itemValue, itemIndex) =>
                setService(itemValue)
        }>
            <Picker.Item label="Serviços Gerais" value="Serviços Gerais" />
            <Picker.Item label="Atendente" value="Atendente" />
            <Picker.Item label="Artista" value="Artista" />
            <Picker.Item label="Artista Plástico" value="Artista Plástico" />
            <Picker.Item label="Auxiliar de Pedreiro" value="Auxiliar de Pedreiro" />
            <Picker.Item label="Auxiliar Administrativo" value="Auxiliar Administrativo" />
            <Picker.Item label="Assistência Técnica" value="Assistência Técnica" />
            <Picker.Item label="Bombeiro" value="Bombeiro" />
            <Picker.Item label="Babá" value="Babá" />
            <Picker.Item label="Barman" value="Barman" />
            <Picker.Item label="Borracheiro" value="Borracheiro" />
            <Picker.Item label="Cabelereira" value="Cabelereira" />
            <Picker.Item label="Carpinteiro" value="Carpinteiro" />
            <Picker.Item label="Cuidador" value="Cuidador" />
            <Picker.Item label="Chapeiro" value="Chapeiro" />
            <Picker.Item label="Desenvolvedor" value="Desenvolvedor" />
            <Picker.Item label="Designer" value="Designer" />
            <Picker.Item label="Designer-Gráfico" value="Designer-Gráfico" />
            <Picker.Item label="Diárista" value="Diárista" />
            <Picker.Item label="Encanador" value="Encanador" />
            <Picker.Item label="Entregador" value="Entregador" />
            <Picker.Item label="Empregada" value="Empregada" />
            <Picker.Item label="Eletricista" value="Eletricista" />
            <Picker.Item label="Funileiro" value="Funileiro" />
            <Picker.Item label="Garçom" value="Garçom" />
            <Picker.Item label="Jardineiro" value="Jardineiro" />
            <Picker.Item label="Padeiro" value="Padeiro" />
            <Picker.Item label="Pedreiro" value="Pedreiro" />
            <Picker.Item label="Pintor" value="Pintor" />
            <Picker.Item label="Servente de Pedreiro" value="Servente de Pedreiro" />
            <Picker.Item label="Segurança" value="Segurança" />
            <Picker.Item label="Soldador" value="Soldador" />
            <Picker.Item label="Suporte Técnico" value="Suporte Técnico" />
            <Picker.Item label="Mêcanico Automobilístico" value="Mêcanico Automobilístico" />
            <Picker.Item label="Marceneiro" value="Marceneiro" />
            <Picker.Item label="Metalúrgico" value="Metalúrgico" />
            <Picker.Item label="Mestre de Obra" value="Mestre de Obra" />
            <Picker.Item label="Motoboy" value="Motoboy" />
            <Picker.Item label="Reboque/Guincho" value="Reboque/Guincho" />
            <Picker.Item label="Recepcionista" value="Recepcionista" />
            <Picker.Item label="Técnico em ArCondicionado" value="Técnico em ArCondicionado" />
            <Picker.Item label="Vendedor" value="Vendedor" />
            <Picker.Item label="Vigia" value="Vigia" />
        </Picker>
    </>
);

}

export default PickerItem;*/