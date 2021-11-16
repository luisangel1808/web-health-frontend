export const makeValoration = (systolic, diastolic)=>{
        if(systolic<=80 || diastolic<60){
            return 0
        }
        else if((systolic>=80 && systolic<=119) && (diastolic>=60 && diastolic<=79)){
            return 1
        }
        else if((systolic>=120 && systolic<=139) || (diastolic>=80 && diastolic<=89)){
            return 2
        }
        else if((systolic>=140 && systolic<=159) || (diastolic>=90 && diastolic<=99)){
            return 3
        }
        else if((systolic>=160 && systolic<=180) || (diastolic>=100 && diastolic<=120)){
            return 4
        }
        else if((systolic>180) || (diastolic>110)){
            return 5
        }
}

export const valorationCatalog = key =>{
    switch (key) {
        case 0:
        return "Hipotensión"
        case 1:
        return "Normal"
        case 2:
        return "Elevada"
        case 3:
        return "Etapa 1 de hipertensión"
        case 4:
        return "Etapa 2 de hipertensión"
        case 5:
        return "Crisis hipertensiva"
        default:
        return null
    }
}

export const frequencyCatalog = key =>{
    switch (key) {
        case 0:
        return "Una vez"
        case 1:
        return "Diariamente"
        case 2:
        return "Semanalmente"
        default:
        return null
    }
}

export const importanceCatalog = key =>{
    switch (key) {
        case 0:
        return "Alta"
        case 1:
        return "Media"
        case 2:
        return "Baja"
        default:
        return null
    }
}

export const toIso = date =>{
        let t = new Date();
        if (date !== undefined) {
          t = new Date(date);
        }
        let z = t.getTimezoneOffset() * 60 * 1000;
        let tLocal = t - z;
        tLocal = new Date(tLocal);
        let iso = tLocal.toISOString();
        return iso.slice(0, 16);

}