export default {
    namespaced: true,
    state: {
        cars: [
            {
                licenseplate: 'S-GG-1236',
                id: '565F8BA463244D1BEB',
            },
            // {
            //     licenseplate: 'S-AA-3333',
            //     id: 'AAAAF8BA463244D1BEB',
            // },
        ],
    },
    getters: {
        getAvailableCars: (state: { cars: any }) => state.cars
    },
    mutations: {
        SET_CARS (state: { cars: any; }, payload: any) {
            state.cars = payload;
        }
    },
    actions: {
        setCars ({ commit }: any, payload: any) {
            commit('SET_CARS', payload);
        }
    }
}