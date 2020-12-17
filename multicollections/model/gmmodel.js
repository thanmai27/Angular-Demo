
const mongoose =  require('mongoose');

const Gm =  mongoose.model('abc',
{
    sycid:{type:Number,required:true},
    serviceName:{type:String,required:true},
    serviceTier:{type:String,required:true},
    location:{type:String,required:true},
    chargesBilledSeparately:{type:Boolean,required:true},
    partNumber:{type:String,required:true},    
    serresourceGuid:{type:String,required:true},
    offerId:{type:String,required:true},
    cost:{type:String,required:true},
    accountId:{type:Number,required:true},
    productId:{type:Number,required:true},
    resourceLocationId:{type:Number,required:true},
    consumedServiceId:{type:Number,required:true},
    departmentId:{type:Number,required:true},
    accountOwnerEmail:{type:String,required:true},
    accountName:{type:String,required:true},
    serviceAdministratorId:{type:String,required:true},
    subscriptionId:{type:Number,required:true},    
    subscriptionGuid:{type:String,required:true},
    subscriptionName:{type:String,required:true},
    date:{type:Date,required:true},
    product:{type:String,required:true},

    meterId:{type:String,required:true},
    meterCategory:{type:String,required:true},
    meterSubCategory:{type:String,required:true},
    meterRegion:{type:String,required:true},    
    meterName:{type:String,required:true},
    consumedQuantity:{type:Number,required:true},
    resourceRate:{type:Number,required:true},
    resourceLocation:{type:String,required:true},

    consumedService:{type:String,required:true},
    instanceId:{type:String,required:true},
    serviceInfo1:{type:String,required:true},
    serviceInfo2:{type:String,required:true},    
    additionalInfo:{type:String,required:true},
    tags:{type:Number,required:true},
    storeServiceIdentifier:{type:String,required:true},
    departmentName:{type:String,required:true},

    costCenter:{type:String,required:true},
    unitOfMeasure:{type:String,required:true},
    resourceGroup:{type:String,required:true},
 

}
)

module.exports = {Gm}


