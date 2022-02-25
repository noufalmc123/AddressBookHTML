class AddressBook
{
    
    get name()
    {
        return this.name;
    }
    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z A-Z]{2,}$')
        if (nameRegex.test(name)) this._name = name;  
        else  throw "Name is Incorrect";
           
    }
    set id(id)
    {
        this.id=id;
    }
    get id()
    {
        return this.id;
    }
    get address()
    {
        return this.address;
    }
    set address(address)
    {
        // let addRegex=RegExp('(^((?:(?:^| )\S+ *)){3,})$');
        let addRegex = RegExp('^[A-Z]{1}[a-z A-Z]{2,}$')
        if(addRegex.test(address))
        {
            this._address=address;
        }
        else
        {
            throw "Invalid Address"
        }
    }
    set state(state)
    {
        this.state=state;
    }
    get state()
    {
        return this.state;
    }
    set zipcode(zipcode)
    {
        this._zipcode=zipcode;
    }
    get zipcode()
    {
        return this._zipcode;
    }
    set phoneNumber(phoneNumber)
    {
        let nameRegex=RegExp('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$');
        if(nameRegex.test(phoneNumber))
        {
            this._phoneNumber=phoneNumber;
        }
        else
        {
            throw "Invalid Mobile Number"
        }
        
    }
    get phoneNumber()
    {
        return this.phoneNumber;
    }
    toString() 
    {
        return "\nId =>  " + this._id + " Name =>" + this._name+"Address =>"+this._address+"State =>"+this._state+
        "City =>"+this._city+"ZipCode => "+this._zipcode+"Phone Number => "+this._phoneNumber ;
    }
}