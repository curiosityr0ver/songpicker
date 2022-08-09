export const incCount = (count) => {
    return {
        type: 'COUNT_INCREMENT',
        payload: count + 1
    }
}

export const decCount = (count) => {
    return {
        type: 'COUNT_DECREMENT',
        payload: count - 1

    }
}