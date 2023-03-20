/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSMAccount = /* GraphQL */ `
  subscription OnCreateSMAccount(
    $filter: ModelSubscriptionSMAccountFilterInput
    $owner: String
  ) {
    onCreateSMAccount(filter: $filter, owner: $owner) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      pw
      nationality
      MFKubwaCost
      MFKubwaNetCost
      MFNdogoDue
      MFNdogoNet
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSMAccount = /* GraphQL */ `
  subscription OnUpdateSMAccount(
    $filter: ModelSubscriptionSMAccountFilterInput
    $owner: String
  ) {
    onUpdateSMAccount(filter: $filter, owner: $owner) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      pw
      nationality
      MFKubwaCost
      MFKubwaNetCost
      MFNdogoDue
      MFNdogoNet
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSMAccount = /* GraphQL */ `
  subscription OnDeleteSMAccount(
    $filter: ModelSubscriptionSMAccountFilterInput
    $owner: String
  ) {
    onDeleteSMAccount(filter: $filter, owner: $owner) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      pw
      nationality
      MFKubwaCost
      MFKubwaNetCost
      MFNdogoDue
      MFNdogoNet
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSMLoansCovered = /* GraphQL */ `
  subscription OnCreateSMLoansCovered(
    $filter: ModelSubscriptionSMLoansCoveredFilterInput
    $owner: String
  ) {
    onCreateSMLoansCovered(filter: $filter, owner: $owner) {
      id
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      dfltUpdate
      amountrepaid
      lonBala
      loaneename
      loanername
      loanerEmail
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      loaneeEmail
      timeExpBack2
      description
      status
      owner
      createdAt
      advEmail
      updatedAt
    }
  }
`;
export const onUpdateSMLoansCovered = /* GraphQL */ `
  subscription OnUpdateSMLoansCovered(
    $filter: ModelSubscriptionSMLoansCoveredFilterInput
    $owner: String
  ) {
    onUpdateSMLoansCovered(filter: $filter, owner: $owner) {
      id
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      dfltUpdate
      amountrepaid
      lonBala
      loaneename
      loanername
      loanerEmail
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      loaneeEmail
      timeExpBack2
      description
      status
      owner
      createdAt
      advEmail
      updatedAt
    }
  }
`;
export const onDeleteSMLoansCovered = /* GraphQL */ `
  subscription OnDeleteSMLoansCovered(
    $filter: ModelSubscriptionSMLoansCoveredFilterInput
    $owner: String
  ) {
    onDeleteSMLoansCovered(filter: $filter, owner: $owner) {
      id
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      dfltUpdate
      amountrepaid
      lonBala
      loaneename
      loanername
      loanerEmail
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      loaneeEmail
      timeExpBack2
      description
      status
      owner
      createdAt
      advEmail
      updatedAt
    }
  }
`;
export const onCreateSMLoansNonCovered = /* GraphQL */ `
  subscription OnCreateSMLoansNonCovered(
    $filter: ModelSubscriptionSMLoansNonCoveredFilterInput
    $owner: String
  ) {
    onCreateSMLoansNonCovered(filter: $filter, owner: $owner) {
      id
      loaneePhn
      loanerPhn
      loanerLoanee
      loaneeid
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSMLoansNonCovered = /* GraphQL */ `
  subscription OnUpdateSMLoansNonCovered(
    $filter: ModelSubscriptionSMLoansNonCoveredFilterInput
    $owner: String
  ) {
    onUpdateSMLoansNonCovered(filter: $filter, owner: $owner) {
      id
      loaneePhn
      loanerPhn
      loanerLoanee
      loaneeid
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSMLoansNonCovered = /* GraphQL */ `
  subscription OnDeleteSMLoansNonCovered(
    $filter: ModelSubscriptionSMLoansNonCoveredFilterInput
    $owner: String
  ) {
    onDeleteSMLoansNonCovered(filter: $filter, owner: $owner) {
      id
      loaneePhn
      loanerPhn
      loanerLoanee
      loaneeid
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNonLoans = /* GraphQL */ `
  subscription OnCreateNonLoans(
    $filter: ModelSubscriptionNonLoansFilterInput
    $owner: String
  ) {
    onCreateNonLoans(filter: $filter, owner: $owner) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      loanId1
      loanId2
      loanId3
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNonLoans = /* GraphQL */ `
  subscription OnUpdateNonLoans(
    $filter: ModelSubscriptionNonLoansFilterInput
    $owner: String
  ) {
    onUpdateNonLoans(filter: $filter, owner: $owner) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      loanId1
      loanId2
      loanId3
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNonLoans = /* GraphQL */ `
  subscription OnDeleteNonLoans(
    $filter: ModelSubscriptionNonLoansFilterInput
    $owner: String
  ) {
    onDeleteNonLoans(filter: $filter, owner: $owner) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      loanId1
      loanId2
      loanId3
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSokoAd = /* GraphQL */ `
  subscription OnCreateSokoAd(
    $filter: ModelSubscriptionSokoAdFilterInput
    $owner: String
  ) {
    onCreateSokoAd(filter: $filter, owner: $owner) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSokoAd = /* GraphQL */ `
  subscription OnUpdateSokoAd(
    $filter: ModelSubscriptionSokoAdFilterInput
    $owner: String
  ) {
    onUpdateSokoAd(filter: $filter, owner: $owner) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSokoAd = /* GraphQL */ `
  subscription OnDeleteSokoAd(
    $filter: ModelSubscriptionSokoAdFilterInput
    $owner: String
  ) {
    onDeleteSokoAd(filter: $filter, owner: $owner) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSokoAd5 = /* GraphQL */ `
  subscription OnCreateSokoAd5(
    $filter: ModelSubscriptionSokoAd5FilterInput
    $owner: String
  ) {
    onCreateSokoAd5(filter: $filter, owner: $owner) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSokoAd5 = /* GraphQL */ `
  subscription OnUpdateSokoAd5(
    $filter: ModelSubscriptionSokoAd5FilterInput
    $owner: String
  ) {
    onUpdateSokoAd5(filter: $filter, owner: $owner) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSokoAd5 = /* GraphQL */ `
  subscription OnDeleteSokoAd5(
    $filter: ModelSubscriptionSokoAd5FilterInput
    $owner: String
  ) {
    onDeleteSokoAd5(filter: $filter, owner: $owner) {
      id
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRafikiLnAd = /* GraphQL */ `
  subscription OnCreateRafikiLnAd(
    $filter: ModelSubscriptionRafikiLnAdFilterInput
    $owner: String
  ) {
    onCreateRafikiLnAd(filter: $filter, owner: $owner) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      AdvEmail
      advLicNo
      rafikiamnt
      defaultPenalty
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRafikiLnAd = /* GraphQL */ `
  subscription OnUpdateRafikiLnAd(
    $filter: ModelSubscriptionRafikiLnAdFilterInput
    $owner: String
  ) {
    onUpdateRafikiLnAd(filter: $filter, owner: $owner) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      AdvEmail
      advLicNo
      rafikiamnt
      defaultPenalty
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRafikiLnAd = /* GraphQL */ `
  subscription OnDeleteRafikiLnAd(
    $filter: ModelSubscriptionRafikiLnAdFilterInput
    $owner: String
  ) {
    onDeleteRafikiLnAd(filter: $filter, owner: $owner) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      AdvEmail
      advLicNo
      rafikiamnt
      defaultPenalty
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent(
    $filter: ModelSubscriptionAgentFilterInput
    $owner: String
  ) {
    onCreateAgent(filter: $filter, owner: $owner) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent(
    $filter: ModelSubscriptionAgentFilterInput
    $owner: String
  ) {
    onUpdateAgent(filter: $filter, owner: $owner) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent(
    $filter: ModelSubscriptionAgentFilterInput
    $owner: String
  ) {
    onDeleteAgent(filter: $filter, owner: $owner) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFloatPurchase = /* GraphQL */ `
  subscription OnCreateFloatPurchase(
    $filter: ModelSubscriptionFloatPurchaseFilterInput
    $owner: String
  ) {
    onCreateFloatPurchase(filter: $filter, owner: $owner) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFloatPurchase = /* GraphQL */ `
  subscription OnUpdateFloatPurchase(
    $filter: ModelSubscriptionFloatPurchaseFilterInput
    $owner: String
  ) {
    onUpdateFloatPurchase(filter: $filter, owner: $owner) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFloatPurchase = /* GraphQL */ `
  subscription OnDeleteFloatPurchase(
    $filter: ModelSubscriptionFloatPurchaseFilterInput
    $owner: String
  ) {
    onDeleteFloatPurchase(filter: $filter, owner: $owner) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFloatAdd = /* GraphQL */ `
  subscription OnCreateFloatAdd(
    $filter: ModelSubscriptionFloatAddFilterInput
    $owner: String
  ) {
    onCreateFloatAdd(filter: $filter, owner: $owner) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFloatAdd = /* GraphQL */ `
  subscription OnUpdateFloatAdd(
    $filter: ModelSubscriptionFloatAddFilterInput
    $owner: String
  ) {
    onUpdateFloatAdd(filter: $filter, owner: $owner) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFloatAdd = /* GraphQL */ `
  subscription OnDeleteFloatAdd(
    $filter: ModelSubscriptionFloatAddFilterInput
    $owner: String
  ) {
    onDeleteFloatAdd(filter: $filter, owner: $owner) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFloatReduction = /* GraphQL */ `
  subscription OnCreateFloatReduction(
    $filter: ModelSubscriptionFloatReductionFilterInput
    $owner: String
  ) {
    onCreateFloatReduction(filter: $filter, owner: $owner) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFloatReduction = /* GraphQL */ `
  subscription OnUpdateFloatReduction(
    $filter: ModelSubscriptionFloatReductionFilterInput
    $owner: String
  ) {
    onUpdateFloatReduction(filter: $filter, owner: $owner) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFloatReduction = /* GraphQL */ `
  subscription OnDeleteFloatReduction(
    $filter: ModelSubscriptionFloatReductionFilterInput
    $owner: String
  ) {
    onDeleteFloatReduction(filter: $filter, owner: $owner) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAgentWithdrawals = /* GraphQL */ `
  subscription OnCreateAgentWithdrawals(
    $filter: ModelSubscriptionAgentWithdrawalsFilterInput
    $owner: String
  ) {
    onCreateAgentWithdrawals(filter: $filter, owner: $owner) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAgentWithdrawals = /* GraphQL */ `
  subscription OnUpdateAgentWithdrawals(
    $filter: ModelSubscriptionAgentWithdrawalsFilterInput
    $owner: String
  ) {
    onUpdateAgentWithdrawals(filter: $filter, owner: $owner) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAgentWithdrawals = /* GraphQL */ `
  subscription OnDeleteAgentWithdrawals(
    $filter: ModelSubscriptionAgentWithdrawalsFilterInput
    $owner: String
  ) {
    onDeleteAgentWithdrawals(filter: $filter, owner: $owner) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSAgent = /* GraphQL */ `
  subscription OnCreateSAgent(
    $filter: ModelSubscriptionSAgentFilterInput
    $owner: String
  ) {
    onCreateSAgent(filter: $filter, owner: $owner) {
      saPhoneContact
      saNationalid
      name
      acChamp
      pw
      TtlEarnings
      actvMFNdog
      cost
      costBal
      mfnTtl
      offerStatus
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSAgent = /* GraphQL */ `
  subscription OnUpdateSAgent(
    $filter: ModelSubscriptionSAgentFilterInput
    $owner: String
  ) {
    onUpdateSAgent(filter: $filter, owner: $owner) {
      saPhoneContact
      saNationalid
      name
      acChamp
      pw
      TtlEarnings
      actvMFNdog
      cost
      costBal
      mfnTtl
      offerStatus
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSAgent = /* GraphQL */ `
  subscription OnDeleteSAgent(
    $filter: ModelSubscriptionSAgentFilterInput
    $owner: String
  ) {
    onDeleteSAgent(filter: $filter, owner: $owner) {
      saPhoneContact
      saNationalid
      name
      acChamp
      pw
      TtlEarnings
      actvMFNdog
      cost
      costBal
      mfnTtl
      offerStatus
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSAgentWithdrawals = /* GraphQL */ `
  subscription OnCreateSAgentWithdrawals(
    $filter: ModelSubscriptionSAgentWithdrawalsFilterInput
    $owner: String
  ) {
    onCreateSAgentWithdrawals(filter: $filter, owner: $owner) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSAgentWithdrawals = /* GraphQL */ `
  subscription OnUpdateSAgentWithdrawals(
    $filter: ModelSubscriptionSAgentWithdrawalsFilterInput
    $owner: String
  ) {
    onUpdateSAgentWithdrawals(filter: $filter, owner: $owner) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSAgentWithdrawals = /* GraphQL */ `
  subscription OnDeleteSAgentWithdrawals(
    $filter: ModelSubscriptionSAgentWithdrawalsFilterInput
    $owner: String
  ) {
    onDeleteSAgentWithdrawals(filter: $filter, owner: $owner) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePersonel = /* GraphQL */ `
  subscription OnCreatePersonel(
    $filter: ModelSubscriptionPersonelFilterInput
    $owner: String
  ) {
    onCreatePersonel(filter: $filter, owner: $owner) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePersonel = /* GraphQL */ `
  subscription OnUpdatePersonel(
    $filter: ModelSubscriptionPersonelFilterInput
    $owner: String
  ) {
    onUpdatePersonel(filter: $filter, owner: $owner) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePersonel = /* GraphQL */ `
  subscription OnDeletePersonel(
    $filter: ModelSubscriptionPersonelFilterInput
    $owner: String
  ) {
    onDeletePersonel(filter: $filter, owner: $owner) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBizna = /* GraphQL */ `
  subscription OnCreateBizna($filter: ModelSubscriptionBiznaFilterInput) {
    onCreateBizna(filter: $filter) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      owner2email
      email
      licenseNo
      bizType
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBizna = /* GraphQL */ `
  subscription OnUpdateBizna($filter: ModelSubscriptionBiznaFilterInput) {
    onUpdateBizna(filter: $filter) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      owner2email
      email
      licenseNo
      bizType
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBizna = /* GraphQL */ `
  subscription OnDeleteBizna($filter: ModelSubscriptionBiznaFilterInput) {
    onDeleteBizna(filter: $filter) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      owner2email
      email
      licenseNo
      bizType
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBizna2 = /* GraphQL */ `
  subscription OnCreateBizna2(
    $filter: ModelSubscriptionBizna2FilterInput
    $owner: String
  ) {
    onCreateBizna2(filter: $filter, owner: $owner) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      ownerEml
      saleStts
      noBL
      email
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBizna2 = /* GraphQL */ `
  subscription OnUpdateBizna2(
    $filter: ModelSubscriptionBizna2FilterInput
    $owner: String
  ) {
    onUpdateBizna2(filter: $filter, owner: $owner) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      ownerEml
      saleStts
      noBL
      email
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBizna2 = /* GraphQL */ `
  subscription OnDeleteBizna2(
    $filter: ModelSubscriptionBizna2FilterInput
    $owner: String
  ) {
    onDeleteBizna2(filter: $filter, owner: $owner) {
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      ownerEml
      saleStts
      noBL
      email
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBankAdmin = /* GraphQL */ `
  subscription OnCreateBankAdmin(
    $filter: ModelSubscriptionBankAdminFilterInput
    $owner: String
  ) {
    onCreateBankAdmin(filter: $filter, owner: $owner) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBankAdmin = /* GraphQL */ `
  subscription OnUpdateBankAdmin(
    $filter: ModelSubscriptionBankAdminFilterInput
    $owner: String
  ) {
    onUpdateBankAdmin(filter: $filter, owner: $owner) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBankAdmin = /* GraphQL */ `
  subscription OnDeleteBankAdmin(
    $filter: ModelSubscriptionBankAdminFilterInput
    $owner: String
  ) {
    onDeleteBankAdmin(filter: $filter, owner: $owner) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBankAdmWithdrawals = /* GraphQL */ `
  subscription OnCreateBankAdmWithdrawals(
    $filter: ModelSubscriptionBankAdmWithdrawalsFilterInput
    $owner: String
  ) {
    onCreateBankAdmWithdrawals(filter: $filter, owner: $owner) {
      id
      bankAdmNatId
      amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBankAdmWithdrawals = /* GraphQL */ `
  subscription OnUpdateBankAdmWithdrawals(
    $filter: ModelSubscriptionBankAdmWithdrawalsFilterInput
    $owner: String
  ) {
    onUpdateBankAdmWithdrawals(filter: $filter, owner: $owner) {
      id
      bankAdmNatId
      amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBankAdmWithdrawals = /* GraphQL */ `
  subscription OnDeleteBankAdmWithdrawals(
    $filter: ModelSubscriptionBankAdmWithdrawalsFilterInput
    $owner: String
  ) {
    onDeleteBankAdmWithdrawals(filter: $filter, owner: $owner) {
      id
      bankAdmNatId
      amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAdvocate = /* GraphQL */ `
  subscription OnCreateAdvocate(
    $filter: ModelSubscriptionAdvocateFilterInput
    $owner: String
  ) {
    onCreateAdvocate(filter: $filter, owner: $owner) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdvocate = /* GraphQL */ `
  subscription OnUpdateAdvocate(
    $filter: ModelSubscriptionAdvocateFilterInput
    $owner: String
  ) {
    onUpdateAdvocate(filter: $filter, owner: $owner) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdvocate = /* GraphQL */ `
  subscription OnDeleteAdvocate(
    $filter: ModelSubscriptionAdvocateFilterInput
    $owner: String
  ) {
    onDeleteAdvocate(filter: $filter, owner: $owner) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAdvocateWithdrawals = /* GraphQL */ `
  subscription OnCreateAdvocateWithdrawals(
    $filter: ModelSubscriptionAdvocateWithdrawalsFilterInput
    $owner: String
  ) {
    onCreateAdvocateWithdrawals(filter: $filter, owner: $owner) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdvocateWithdrawals = /* GraphQL */ `
  subscription OnUpdateAdvocateWithdrawals(
    $filter: ModelSubscriptionAdvocateWithdrawalsFilterInput
    $owner: String
  ) {
    onUpdateAdvocateWithdrawals(filter: $filter, owner: $owner) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdvocateWithdrawals = /* GraphQL */ `
  subscription OnDeleteAdvocateWithdrawals(
    $filter: ModelSubscriptionAdvocateWithdrawalsFilterInput
    $owner: String
  ) {
    onDeleteAdvocateWithdrawals(filter: $filter, owner: $owner) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onCreateCompany(filter: $filter, owner: $owner) {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      biznaCredSaleFee
      biznaCashSaleFee
      dfltWaiverFee
      tenderingFee
      EmploymentFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      createdAt
      MFNdogoTC
      MFKubwaTC
      AdvocateTC
      BiznaTNC
      ChamaTNC
      PayPalTNC
      maxDfltPen
      bizBLNo
      updatedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      biznaCredSaleFee
      biznaCashSaleFee
      dfltWaiverFee
      tenderingFee
      EmploymentFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      createdAt
      MFNdogoTC
      MFKubwaTC
      AdvocateTC
      BiznaTNC
      ChamaTNC
      PayPalTNC
      maxDfltPen
      bizBLNo
      updatedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      biznaCredSaleFee
      biznaCashSaleFee
      dfltWaiverFee
      tenderingFee
      EmploymentFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      createdAt
      MFNdogoTC
      MFKubwaTC
      AdvocateTC
      BiznaTNC
      ChamaTNC
      PayPalTNC
      maxDfltPen
      bizBLNo
      updatedAt
    }
  }
`;
export const onCreateCovCreditSeller = /* GraphQL */ `
  subscription OnCreateCovCreditSeller(
    $filter: ModelSubscriptionCovCreditSellerFilterInput
    $owner: String
  ) {
    onCreateCovCreditSeller(filter: $filter, owner: $owner) {
      id
      itemName
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      advEmail
      buyerName
      SellerName
      sellerID
      amountSold
      dfltUpdate
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      timeExpBack
      timeExpBack2
      lonBala
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCovCreditSeller = /* GraphQL */ `
  subscription OnUpdateCovCreditSeller(
    $filter: ModelSubscriptionCovCreditSellerFilterInput
    $owner: String
  ) {
    onUpdateCovCreditSeller(filter: $filter, owner: $owner) {
      id
      itemName
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      advEmail
      buyerName
      SellerName
      sellerID
      amountSold
      dfltUpdate
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      timeExpBack
      timeExpBack2
      lonBala
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCovCreditSeller = /* GraphQL */ `
  subscription OnDeleteCovCreditSeller(
    $filter: ModelSubscriptionCovCreditSellerFilterInput
    $owner: String
  ) {
    onDeleteCovCreditSeller(filter: $filter, owner: $owner) {
      id
      itemName
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      advEmail
      buyerName
      SellerName
      sellerID
      amountSold
      dfltUpdate
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      timeExpBack
      timeExpBack2
      lonBala
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNonCovCreditSeller = /* GraphQL */ `
  subscription OnCreateNonCovCreditSeller(
    $filter: ModelSubscriptionNonCovCreditSellerFilterInput
    $owner: String
  ) {
    onCreateNonCovCreditSeller(filter: $filter, owner: $owner) {
      id
      itemName
      loanerLoanee
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      lonBala
      repaymentPeriod
      timeExpBack
      timeExpBack2
      description
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNonCovCreditSeller = /* GraphQL */ `
  subscription OnUpdateNonCovCreditSeller(
    $filter: ModelSubscriptionNonCovCreditSellerFilterInput
    $owner: String
  ) {
    onUpdateNonCovCreditSeller(filter: $filter, owner: $owner) {
      id
      itemName
      loanerLoanee
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      lonBala
      repaymentPeriod
      timeExpBack
      timeExpBack2
      description
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNonCovCreditSeller = /* GraphQL */ `
  subscription OnDeleteNonCovCreditSeller(
    $filter: ModelSubscriptionNonCovCreditSellerFilterInput
    $owner: String
  ) {
    onDeleteNonCovCreditSeller(filter: $filter, owner: $owner) {
      id
      itemName
      loanerLoanee
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      lonBala
      repaymentPeriod
      timeExpBack
      timeExpBack2
      description
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onCreateGroup(filter: $filter, owner: $owner) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      grpEmail
      grpBal
      ttlGrpMembers
      description
      withdrwlAmt
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onUpdateGroup(filter: $filter, owner: $owner) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      grpEmail
      grpBal
      ttlGrpMembers
      description
      withdrwlAmt
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onDeleteGroup(filter: $filter, owner: $owner) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      grpEmail
      grpBal
      ttlGrpMembers
      description
      withdrwlAmt
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChamaMembers = /* GraphQL */ `
  subscription OnCreateChamaMembers(
    $filter: ModelSubscriptionChamaMembersFilterInput
    $owner: String
  ) {
    onCreateChamaMembers(filter: $filter, owner: $owner) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChamaMembers = /* GraphQL */ `
  subscription OnUpdateChamaMembers(
    $filter: ModelSubscriptionChamaMembersFilterInput
    $owner: String
  ) {
    onUpdateChamaMembers(filter: $filter, owner: $owner) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChamaMembers = /* GraphQL */ `
  subscription OnDeleteChamaMembers(
    $filter: ModelSubscriptionChamaMembersFilterInput
    $owner: String
  ) {
    onDeleteChamaMembers(filter: $filter, owner: $owner) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChamasNPwnBrkrs = /* GraphQL */ `
  subscription OnCreateChamasNPwnBrkrs(
    $filter: ModelSubscriptionChamasNPwnBrkrsFilterInput
  ) {
    onCreateChamasNPwnBrkrs(filter: $filter) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChamasNPwnBrkrs = /* GraphQL */ `
  subscription OnUpdateChamasNPwnBrkrs(
    $filter: ModelSubscriptionChamasNPwnBrkrsFilterInput
  ) {
    onUpdateChamasNPwnBrkrs(filter: $filter) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChamasNPwnBrkrs = /* GraphQL */ `
  subscription OnDeleteChamasNPwnBrkrs(
    $filter: ModelSubscriptionChamasNPwnBrkrsFilterInput
  ) {
    onDeleteChamasNPwnBrkrs(filter: $filter) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChamasRegConfirm = /* GraphQL */ `
  subscription OnCreateChamasRegConfirm(
    $filter: ModelSubscriptionChamasRegConfirmFilterInput
    $owner: String
  ) {
    onCreateChamasRegConfirm(filter: $filter, owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChamasRegConfirm = /* GraphQL */ `
  subscription OnUpdateChamasRegConfirm(
    $filter: ModelSubscriptionChamasRegConfirmFilterInput
    $owner: String
  ) {
    onUpdateChamasRegConfirm(filter: $filter, owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChamasRegConfirm = /* GraphQL */ `
  subscription OnDeleteChamasRegConfirm(
    $filter: ModelSubscriptionChamasRegConfirmFilterInput
    $owner: String
  ) {
    onDeleteChamasRegConfirm(filter: $filter, owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCvrdGroupLoans = /* GraphQL */ `
  subscription OnCreateCvrdGroupLoans(
    $filter: ModelSubscriptionCvrdGroupLoansFilterInput
    $owner: String
  ) {
    onCreateCvrdGroupLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      advEmail
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      dfltUpdate
      lonBala
      memberId
      advRegNu
      loaneeName
      LoanerName
      timeExpBack
      timeExpBack2
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCvrdGroupLoans = /* GraphQL */ `
  subscription OnUpdateCvrdGroupLoans(
    $filter: ModelSubscriptionCvrdGroupLoansFilterInput
    $owner: String
  ) {
    onUpdateCvrdGroupLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      advEmail
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      dfltUpdate
      lonBala
      memberId
      advRegNu
      loaneeName
      LoanerName
      timeExpBack
      timeExpBack2
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCvrdGroupLoans = /* GraphQL */ `
  subscription OnDeleteCvrdGroupLoans(
    $filter: ModelSubscriptionCvrdGroupLoansFilterInput
    $owner: String
  ) {
    onDeleteCvrdGroupLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      advEmail
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      dfltUpdate
      lonBala
      memberId
      advRegNu
      loaneeName
      LoanerName
      timeExpBack
      timeExpBack2
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNonCvrdGroupLoans = /* GraphQL */ `
  subscription OnCreateNonCvrdGroupLoans(
    $filter: ModelSubscriptionNonCvrdGroupLoansFilterInput
    $owner: String
  ) {
    onCreateNonCvrdGroupLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      loaneePhn
      loanerLoanee
      DefaultPenaltyChm
      DefaultPenaltyChm2
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      timeExpBack
      timeExpBack2
      description
      loaneeName
      loanerName
      memberId
      lonBala
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNonCvrdGroupLoans = /* GraphQL */ `
  subscription OnUpdateNonCvrdGroupLoans(
    $filter: ModelSubscriptionNonCvrdGroupLoansFilterInput
    $owner: String
  ) {
    onUpdateNonCvrdGroupLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      loaneePhn
      loanerLoanee
      DefaultPenaltyChm
      DefaultPenaltyChm2
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      timeExpBack
      timeExpBack2
      description
      loaneeName
      loanerName
      memberId
      lonBala
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNonCvrdGroupLoans = /* GraphQL */ `
  subscription OnDeleteNonCvrdGroupLoans(
    $filter: ModelSubscriptionNonCvrdGroupLoansFilterInput
    $owner: String
  ) {
    onDeleteNonCvrdGroupLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      loaneePhn
      loanerLoanee
      DefaultPenaltyChm
      DefaultPenaltyChm2
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      timeExpBack
      timeExpBack2
      description
      loaneeName
      loanerName
      memberId
      lonBala
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupNonLoans = /* GraphQL */ `
  subscription OnCreateGroupNonLoans(
    $filter: ModelSubscriptionGroupNonLoansFilterInput
    $owner: String
  ) {
    onCreateGroupNonLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupNonLoans = /* GraphQL */ `
  subscription OnUpdateGroupNonLoans(
    $filter: ModelSubscriptionGroupNonLoansFilterInput
    $owner: String
  ) {
    onUpdateGroupNonLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupNonLoans = /* GraphQL */ `
  subscription OnDeleteGroupNonLoans(
    $filter: ModelSubscriptionGroupNonLoansFilterInput
    $owner: String
  ) {
    onDeleteGroupNonLoans(filter: $filter, owner: $owner) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGrpMembersContribution = /* GraphQL */ `
  subscription OnCreateGrpMembersContribution(
    $filter: ModelSubscriptionGrpMembersContributionFilterInput
    $owner: String
  ) {
    onCreateGrpMembersContribution(filter: $filter, owner: $owner) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGrpMembersContribution = /* GraphQL */ `
  subscription OnUpdateGrpMembersContribution(
    $filter: ModelSubscriptionGrpMembersContributionFilterInput
    $owner: String
  ) {
    onUpdateGrpMembersContribution(filter: $filter, owner: $owner) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGrpMembersContribution = /* GraphQL */ `
  subscription OnDeleteGrpMembersContribution(
    $filter: ModelSubscriptionGrpMembersContributionFilterInput
    $owner: String
  ) {
    onDeleteGrpMembersContribution(filter: $filter, owner: $owner) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReqLoan = /* GraphQL */ `
  subscription OnCreateReqLoan(
    $filter: ModelSubscriptionReqLoanFilterInput
    $owner: String
  ) {
    onCreateReqLoan(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onUpdateReqLoan = /* GraphQL */ `
  subscription OnUpdateReqLoan(
    $filter: ModelSubscriptionReqLoanFilterInput
    $owner: String
  ) {
    onUpdateReqLoan(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onDeleteReqLoan = /* GraphQL */ `
  subscription OnDeleteReqLoan(
    $filter: ModelSubscriptionReqLoanFilterInput
    $owner: String
  ) {
    onDeleteReqLoan(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onCreateReqLoanChama = /* GraphQL */ `
  subscription OnCreateReqLoanChama(
    $filter: ModelSubscriptionReqLoanChamaFilterInput
    $owner: String
  ) {
    onCreateReqLoanChama(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      advLicNo
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      loaneeMemberId
      createdAt
      statusNumber
      AdvEmail
      loanerName
      loanerPhone
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onUpdateReqLoanChama = /* GraphQL */ `
  subscription OnUpdateReqLoanChama(
    $filter: ModelSubscriptionReqLoanChamaFilterInput
    $owner: String
  ) {
    onUpdateReqLoanChama(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      advLicNo
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      loaneeMemberId
      createdAt
      statusNumber
      AdvEmail
      loanerName
      loanerPhone
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onDeleteReqLoanChama = /* GraphQL */ `
  subscription OnDeleteReqLoanChama(
    $filter: ModelSubscriptionReqLoanChamaFilterInput
    $owner: String
  ) {
    onDeleteReqLoanChama(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      advLicNo
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      loaneeMemberId
      createdAt
      statusNumber
      AdvEmail
      loanerName
      loanerPhone
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onCreateReqLoanCredSl = /* GraphQL */ `
  subscription OnCreateReqLoanCredSl(
    $filter: ModelSubscriptionReqLoanCredSlFilterInput
    $owner: String
  ) {
    onCreateReqLoanCredSl(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onUpdateReqLoanCredSl = /* GraphQL */ `
  subscription OnUpdateReqLoanCredSl(
    $filter: ModelSubscriptionReqLoanCredSlFilterInput
    $owner: String
  ) {
    onUpdateReqLoanCredSl(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onDeleteReqLoanCredSl = /* GraphQL */ `
  subscription OnDeleteReqLoanCredSl(
    $filter: ModelSubscriptionReqLoanCredSlFilterInput
    $owner: String
  ) {
    onDeleteReqLoanCredSl(filter: $filter, owner: $owner) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      statusNumber
      AdvEmail
      advLicNo
      loanerName
      loanerPhone
      description
      defaultPenalty
      updatedAt
    }
  }
`;
export const onCreateExRates = /* GraphQL */ `
  subscription OnCreateExRates(
    $filter: ModelSubscriptionExRatesFilterInput
    $owner: String
  ) {
    onCreateExRates(filter: $filter, owner: $owner) {
      cur
      sellingPrice
      buyingPrice
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateExRates = /* GraphQL */ `
  subscription OnUpdateExRates(
    $filter: ModelSubscriptionExRatesFilterInput
    $owner: String
  ) {
    onUpdateExRates(filter: $filter, owner: $owner) {
      cur
      sellingPrice
      buyingPrice
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteExRates = /* GraphQL */ `
  subscription OnDeleteExRates(
    $filter: ModelSubscriptionExRatesFilterInput
    $owner: String
  ) {
    onDeleteExRates(filter: $filter, owner: $owner) {
      cur
      sellingPrice
      buyingPrice
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMFKOfferz = /* GraphQL */ `
  subscription OnCreateMFKOfferz(
    $filter: ModelSubscriptionMFKOfferzFilterInput
    $owner: String
  ) {
    onCreateMFKOfferz(filter: $filter, owner: $owner) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMFKOfferz = /* GraphQL */ `
  subscription OnUpdateMFKOfferz(
    $filter: ModelSubscriptionMFKOfferzFilterInput
    $owner: String
  ) {
    onUpdateMFKOfferz(filter: $filter, owner: $owner) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMFKOfferz = /* GraphQL */ `
  subscription OnDeleteMFKOfferz(
    $filter: ModelSubscriptionMFKOfferzFilterInput
    $owner: String
  ) {
    onDeleteMFKOfferz(filter: $filter, owner: $owner) {
      id
      offerStatus
      acCost
      amtPaid
      mfnOffered
      acChamp
      mfnReg
      status
      mfkAc
      acMainAc
      createdAt
      updatedAt
      owner
    }
  }
`;
