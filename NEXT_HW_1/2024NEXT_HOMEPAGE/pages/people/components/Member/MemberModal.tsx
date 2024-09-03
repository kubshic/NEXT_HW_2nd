import React from 'react';
import * as S from 'styles/components/member/modalstyle'; // 모달을 위한 스타일은 이 파일에서 정의했다고 가정
import { PEOPLE_INFORMATION_TYPE } from 'types/people/people-information';
import Image from 'next/image'; //Next.js 이미지 최적화 컴포넌트를 사용하여 이미지 불러옴

interface MemberModalProps {
    member: PEOPLE_INFORMATION_TYPE;
    onClose: () => void;
}

export default function MemberModal({ member, onClose }: MemberModalProps) {
    return (
        <S.ModalOverlay>
            <S.ModalContainer>
                <S.ModalContent>
                    <S.ModalContentTop>
                        <S.ModalCloseButton onClick={onClose}>
                            <Image src="/images/profile/black_x.png" alt="close" width={20} height={20} />
                        </S.ModalCloseButton>
                    </S.ModalContentTop>
                    <S.ModalContentMid>
                        <S.ModalContentLeft>
                            <S.ModalImageBox>
                                {member.imgSrc ? (
                                    <Image src={member.imgSrc} alt={member.name} width={220} height={220} />
                                ) : (
                                    <div
                                        style={{
                                            backgroundColor: '#333333',
                                            width: '220px',
                                            height: '220px',
                                        }}
                                    />
                                )}
                            </S.ModalImageBox>
                        </S.ModalContentLeft>
                        <S.ModalContentRight>
                            <S.ModalTextBox>
                                <S.ModalFirstLineInfo>
                                    <S.ModalMemberName>{member.name}</S.ModalMemberName>
                                    <S.ModalLinkedIn>
                                        {member.linkedIn && (
                                            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/images/profile/next_linkedin_icon.png"
                                                    alt="linkedin"
                                                    width={20}
                                                    height={20}
                                                />
                                            </a>
                                        )}
                                    </S.ModalLinkedIn>
                                </S.ModalFirstLineInfo>
                                <S.ModalSecondLineInfo>
                                    {member.department}
                                    {member.masterDegree && `(${member.masterDegree})`}
                                    {member.bracket && `(${member.bracket})`} {`${member.classOf}학번`}
                                </S.ModalSecondLineInfo>
                                <S.ModalThirdLineInfo>
                                    {member.secondMajor && `${member.secondMajor}`}
                                </S.ModalThirdLineInfo>
                            </S.ModalTextBox>
                        </S.ModalContentRight>
                    </S.ModalContentMid>
                    <S.ModalContentBottom>
                        <ul>
                            <li>이력 1</li>
                            <li>이력 2</li>
                            <li>이력 3</li>
                        </ul>
                    </S.ModalContentBottom>
                </S.ModalContent>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
}
