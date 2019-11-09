export class ArrayFilterValueConverter {
    toView(array, value, cols) {
        if (!value) { return array; };

        const arrayOut = array.filter((arrayIn) => {
                for (const col in arrayIn) {
                    if (arrayIn.hasOwnProperty(col)) {
                        if (cols.indexOf(col) != -1 && arrayIn[col].toLowerCase()
                                                                   .indexOf(value.toLowerCase()) != -1) {
                            return true;
                        }
                    }
                };
                return false;
            });
            
        return arrayOut;
    }
}
