import data from './languages.json'
export type Item = {
  value: number | string
  name: string
  example: string
}

export type I18nText = {
  'en-US': string
  'ja-JP': string
  'ko-KR': string
}

export const languages = data.languages

export const LanguagesSupported = languages.filter(item => item.supported).map(item => item.value)

export const getLanguage = (locale: string) => {
  if (locale === 'zh-Hans')
    return locale.replace('-', '_')

  return LanguagesSupported[0].replace('-', '_')
}

export const NOTICE_I18N = {
  title: {
    en_US: 'Important Notice',
    ja_JP: '重要なお知らせ',
    ko_KR: '중요 공지',
  },
  desc: {
    en_US:
      'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    ja_JP:
      'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    ko_KR:
      '시스템이 업그레이드를 위해 UTC 시간대로 8월 28일 19:00 ~ 24:00에 사용 불가될 예정입니다. 질문이 있으시면 지원 팀에 연락주세요 (support@dify.ai). 최선을 다해 답변해드리겠습니다.',
  },
  href: '#',
}
