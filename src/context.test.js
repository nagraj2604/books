import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { AppContext, AppProvider } from "./context";
import * as API from "./services/api";
describe("<AppProvider />", () => {
  const TestComponent = () => {
    const { books } = React.useContext(AppContext);
    return (
      <div>
        <div data-testid="book">{books.id}</div>
      </div>
    );
  };
  describe("When get books returns data", () => {
    test("proper data is sent to the component", async () => {
      jest.spyOn(API, "getBooks").mockImplementation(() =>
        Promise.resolve({
          status: 200,
          data: {
            kind: "books#volumes",
            totalItems: 1391,
            items: [
              {
                kind: "books#volume",
                id: "hRDADwAAQBAJ",
                etag: "V8Daakb4LkI",
                selfLink:
                  "https://www.googleapis.com/books/v1/volumes/hRDADwAAQBAJ",
                volumeInfo: {
                  title: "Official Guide to OET",
                  authors: ["Kaplan Test Prep"],
                  publisher: "Simon and Schuster",
                  publishedDate: "2020-03-03",
                  description:
                    "The Official Guide to OET is the first guide book endorsed by the test maker (CBLA) and is designed to prepare students for the updated OET exam. Kaplan Test Prep, the world leader in test preparation since 1938, has authored this book incorporating key test-taking tips and strategies. The practice questions have been reviewed by CBLA to ensure they are true to the test. Get familiar with the exam to help you face the OET with confidence. Test-like Listening tracks, realistic practice questions, and additional online resources give you everything you need to succeed on the OET. This book is suitable for both self-study and classroom use. To access your audio and online resources, first register online at kaptest.com/booksonline. Once you’ve registered, access your audio and resources at kaptest.com/login or download the Kaplan Mobile Prep app on Google Play or the App Store for your Android or iOS device Tips and Practice 1 full practice test Online audio for Listening content Skill-boosting activities for each of the subtests (Listening, Reading, Writing & Speaking Self-study tips Test Day advice Expert Guidance We know the test: The Kaplan team in conjunction with CBLA ensure our practice questions and study materials are true to the test Kaplan's books and practice questions are written by experts who know students—every explanation is written to help you learn We invented test prep—Kaplan (www.kaptestglobal.com) has been helping students for 80 years, and our proven strategies have helped legions of students achieve their dreams",
                  industryIdentifiers: [
                    {
                      type: "ISBN_13",
                      identifier: "9781506263236",
                    },
                    {
                      type: "ISBN_10",
                      identifier: "1506263232",
                    },
                  ],
                  readingModes: {
                    text: true,
                    image: false,
                  },
                  pageCount: 252,
                  printType: "BOOK",
                  categories: ["Foreign Language Study"],
                  maturityRating: "NOT_MATURE",
                  allowAnonLogging: true,
                  contentVersion: "1.3.3.0.preview.2",
                  panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                  },
                  imageLinks: {
                    smallThumbnail:
                      "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    thumbnail:
                      "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                  },
                  language: "en",
                  previewLink:
                    "http://books.google.co.in/books?id=hRDADwAAQBAJ&pg=PP1&dq=kaplan+test+prep&hl=&cd=1&source=gbs_api",
                  infoLink:
                    "https://play.google.com/store/books/details?id=hRDADwAAQBAJ&source=gbs_api",
                  canonicalVolumeLink:
                    "https://play.google.com/store/books/details?id=hRDADwAAQBAJ",
                },
                saleInfo: {
                  country: "IN",
                  saleability: "FOR_SALE",
                  isEbook: true,
                  listPrice: {
                    amount: 1681.5,
                    currencyCode: "INR",
                  },
                  retailPrice: {
                    amount: 1681.5,
                    currencyCode: "INR",
                  },
                  buyLink:
                    "https://play.google.com/store/books/details?id=hRDADwAAQBAJ&rdid=book-hRDADwAAQBAJ&rdot=1&source=gbs_api",
                  offers: [
                    {
                      finskyOfferType: 1,
                      listPrice: {
                        amountInMicros: 1681500000,
                        currencyCode: "INR",
                      },
                      retailPrice: {
                        amountInMicros: 1681500000,
                        currencyCode: "INR",
                      },
                    },
                  ],
                },
                accessInfo: {
                  country: "IN",
                  viewability: "PARTIAL",
                  embeddable: true,
                  publicDomain: false,
                  textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                  epub: {
                    isAvailable: true,
                    acsTokenLink:
                      "http://books.google.co.in/books/download/Official_Guide_to_OET-sample-epub.acsm?id=hRDADwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
                  },
                  pdf: {
                    isAvailable: false,
                  },
                  webReaderLink:
                    "http://play.google.com/books/reader?id=hRDADwAAQBAJ&hl=&source=gbs_api",
                  accessViewStatus: "SAMPLE",
                  quoteSharingAllowed: false,
                },
                searchInfo: {
                  textSnippet:
                    "The Official Guide to OET is the first guide book endorsed by the test maker (CBLA) and is designed to prepare students for the updated OET exam.",
                },
              },
            ],
          },
        })
      );
      render(
        <AppProvider>
          <TestComponent />
        </AppProvider>
      );
      await waitFor(() => {
        const response = screen.getByTestId("book");
        // console.log(response);
      });
    });
  });
});
