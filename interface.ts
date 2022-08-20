interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
    DOB: string;
    Age: number;
}

const breezy: Employee = {
    name: "Shine Breezy",
    id: 1,
    isManager: false,
    DOB: '05/25/1989',
    Age: 33,
    getUniqueId: () => {
        let uniqueId = `${breezy.id}-${breezy.name}`
        if (!breezy.isManager) {
            return `Employee-${uniqueId}`
        }

        return uniqueId
    }

}

console.log(breezy.getUniqueId())


const swaggy: Employee = {
    name: "Swagg Daddy",
    id: 2,
    isManager: true,
    DOB: '05/25/1989',
    Age: 33,
    getUniqueId: () => {
        let uniqueId = `${swaggy.id}-${swaggy.name}`
        if (swaggy.isManager) {
            return `Manager-${uniqueId}`
        }

        return uniqueId
    }

}

console.log(swaggy.getUniqueId())
