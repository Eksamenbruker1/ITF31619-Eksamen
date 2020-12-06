export class ApiFilters {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    filter() {
        const query = { ... this.queryStr};
        const removeFields = ['sort', 'query', 'fields','page','limit'];
        removeFields.forEach((el) => delete query[el]);

        this.query.find(query);
        return this;
    }

    sort() {
        //console.log("QUERYSTRING", this.queryStr);
        //console.log("this.query", this.queryStr);

        if(this.queryStr.sort) {
            const sortBy = this.queryStr.sort.split(',').join(' ');
            this.query.sort(sortBy);
        }
        else {
            this.query = this.query.sort('-updated');
        }
        return this;
    }

    searchByQuery() {
        if(this.queryStr.query) {
            const term = this.queryStr.query.split('-').join(' ');
            console.log(term);
            this.query = this.query.find({$text: {$search: `"${term}"`}});
        }
        return this;
    }

    limitFields() {
        if (this.queryStr.fields) {
            const fields = this.queryStr.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        }
        else {
            this.query = this.query.select('-__v');
        }

        return this;
    }

    pagination() {
        const page = parseInt(this.queryStr.page, 10) || 1;
        const limit = parseInt(this.queryStr.limit, 10) || 10;
        const skipResults = (page - 1) * limit;
        
        this.query = this.query.skip(skipResults).limit(limit);

        return this;
    }
}