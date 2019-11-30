export class Customer {

  constructor(
    public firstName = '',
    public lastName = '',
    public email = '',
    public confirmEmail = '',
    public phone = '',
    public notification = 'email',
    public orderType1 = 'cakes',
    public orderType2 = '',
    public orderType3 = '',
    public orderType4 = '',
    public servings = '',
    public occassion = '',
    public theme = '',
    public productId = '',
    public productImage = null,
    public productName = '') { }
}
