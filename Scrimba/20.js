/**
 * For given list of domains, returns their types

 * @param {Array<string>} domains Array of full domains 
 * @returns {Array<string>} top domain types
 */

const domainType = domains => {
    const topLevelDomains = domains.map(domain => domain.split('.').slice(-1).pop())
    return topLevelDomains.map(getTopDomainType);
}

/**
 * Gets domain type according to mapping
 * 
 * @param {string} domain Suffix of the top level domain
 */
const getTopDomainType = domain => new Map([
    ['org', 'organization'],
    ['com', 'commercial'],
    ['net', 'network'],
    ['info', 'information']
]).get(domain);
