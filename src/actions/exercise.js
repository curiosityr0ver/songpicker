export const incCount = (count) => {
    return {
        type: 'COUNT_INCREMENT',
        payload: count
    }
}

export const decCount = (count) => {
    return {
        type: 'COUNT_DECREMENT',
        payload: count
    }
}