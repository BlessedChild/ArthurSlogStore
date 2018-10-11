'use strict'

const validIssueStatus = {
    New: true,
    Open: true,
    Assigned: true,
    Fixed: true,
    Verified: true,
    Closed: true,
}

const issueFieldType = {
    status: 'required',
    /*
    owner: 'required',
    effort: 'required',
    created: 'required',
    completionDate: 'required',
    title: 'required',
    */
}

function validateIssue(issue){
    for(const field in issueFieldType){
        const type = issueFieldType[field]
        if(!type){
            console.log('Type Error')
            delete issue[field]
        }else if(type === 'required' && !issue[field])
        {
            console.log('Require neccessaty')
            return `${field} is required.`
        }
    }
    if(!validIssueStatus[issue.status]){
        console.log('Status Error')
        return `${issue.status} is not a valid status.`

    return null
    }
}

module.exports = {
    validIssueStatus: validateIssue
}