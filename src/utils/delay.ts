const delay = (ms: number, data?: any) =>
    new Promise<any>(resolve =>
        setTimeout(() => resolve(data), ms)
    );
export default delay;