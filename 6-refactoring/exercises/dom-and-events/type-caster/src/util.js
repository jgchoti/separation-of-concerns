/**
 *
 */
export const typeCaster = (input, type) => {

    return type === 'string' ? String(input) :
        type === "number" ? Number(input) :
            type === "boolean" ? Boolean(input) :
                undefined


};


//   let newValue;
//   if (intendedType === 'string') {
//     newValue = String(stringToCast);
//   } else if (intendedType === 'number') {
//     newValue = Number(stringToCast);
//   } else if (intendedType === 'boolean') {
//     newValue = Boolean(stringToCast);
//   } else {
//     newValue = undefined;
//   }
