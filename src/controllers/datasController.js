class DatasController {
    getDatasDisponiveis(req, res) {
        const today = new Date();
        const availableDates = [];

        for (let i = 1; i <= 14; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            const day = String(nextDate.getDate()).padStart(2, '0');
            const month = String(nextDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const year = nextDate.getFullYear();
            availableDates.push(`${day}/${month}/${year}`);
        }

        res.json(availableDates);
    }
}

module.exports = new DatasController();